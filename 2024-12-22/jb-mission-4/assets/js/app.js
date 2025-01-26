"use strict";

(async () => {
    const getData = (url) => fetch(url).then(response => response.json());

    const fetchRetry = async (url, retries = 5, delay = 5000) => {
        for (let i = 0; i < retries; i++) {
            try {
                const data = await getData(url);
                return data;
            } catch (e) {
                if (i === retries - 1) throw e;
                await new Promise(resolve => setTimeout(resolve, delay));
            }
        }
    };

    const resetAppStorage = () => {
        localStorage.setItem('moreInfo', JSON.stringify([]));
    }
    
    resetAppStorage();

    const toggleSpinner = (visible) => {
        const spinner = document.getElementById('spinner');
        const restOfTheCode = document.getElementById('restOfTheCode');
        if (visible) {
            spinner.style.display = 'block';
            restOfTheCode.style.display = 'none';
        } else {
            spinner.style.display = 'none';
            restOfTheCode.style.display = 'block';
        }
    };

    const toggleSpinnerPopover = (visible, coin) => {
        const spinnerPopover = document.getElementById(`spinnerPopover-${coin}`);
        if (spinnerPopover) {
            if (visible) {
                spinnerPopover.style.display = 'block';
            } else {
                spinnerPopover.style.display = 'none';
            }
        }
    };

    const getAllCoins = async () => {
        toggleSpinner(true);
        const data = await getData('assets/json/coins.json');
        toggleSpinner(false);
        return data;
    };

    const getSingleCoin = async (coin) => {
        const data = await fetchRetry(`https://api.coingecko.com/api/v3/coins/${coin}`);
        return data;
    };

    const getGraphData = async (symbols) => {
        if (!symbols || symbols.length === 0) {
            return {};
        }
        const data = await getData(`https://min-api.cryptocompare.com/data/pricemulti?fsyms=${symbols.join(',')}&tsyms=USD`);
        return data;
    };

    const popoverDisappear = () => {
        const existingPopovers = document.querySelectorAll('[data-bs-toggle="popover"]');
        existingPopovers.forEach(popoverElement => {
            const instance = bootstrap.Popover.getInstance(popoverElement);
            if (instance) {
                instance.dispose();
            }
        });
    };

    const renderCoins = (coins) => {
        popoverDisappear();

        const html = coins.map(coin => `
            <div class="card mb-3" style="width: 18rem; height: 12rem;">
                <div class="card-body">
                    <div class="coin">
                        <div class="switch">
                            <div class="form-check form-switch">
                                <input id="${coin.id}-coinId" class="form-check-input" type="checkbox" role="switch">
                            </div>
                        </div>
                        <h5 class="card-title">${coin.id}</h5>
                        <p class="card-text">${coin.name}</p>
                        <button class="btn btn-primary" data-bs-toggle="popover" id="${coin.id}">More Info</button>
                        <div id="spinnerPopover-${coin.id}" class="spinner-border text-primary" role="status" style="display: none;">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                    </div>
                </div>
            </div>
        `).join('');

        document.getElementById('cards-container').innerHTML = html;

        let switchCounter = 0;
        let switchedOn = [];
        let symbolSwitchedOn = [];
        let pendingSwitch = null;
        let updateInterval = null;

        const switches = () => {
            coins.forEach(coin => {
                const switchElement = document.getElementById(`${coin.id}-coinId`);

                switchElement.addEventListener('change', async function() {
                    if (switchElement.checked) {
                        if (switchCounter < 5) {
                            switchCounter++;
                            switchedOn.push({ id: this.id, symbol: coin.symbol });
                            symbolSwitchedOn.push(coin.symbol);
                            const infoGraph = await getGraphData(symbolSwitchedOn);
                            updateGraph(infoGraph);

                            if (!updateInterval) {
                                updateInterval = setInterval(() => updateGraphData(symbolSwitchedOn), 2000);
                            }

                        } else {
                            switchElement.checked = false;
                            pendingSwitch = this.id;
                            showModal();
                        }
                    } else {
                        switchCounter--;
                        switchedOn = switchedOn.filter(item => item.id !== this.id);
                        symbolSwitchedOn = switchedOn.map(item => item.symbol);

                        // Remove dataset from chart
                        const datasetIndex = chartInstance.data.datasets.findIndex(ds => ds.label === coin.symbol);
                        if (datasetIndex !== -1) {
                            const removedDataset = chartInstance.data.datasets[datasetIndex];
                            releaseColor(removedDataset.borderColor);  // Release the color
                            chartInstance.data.datasets.splice(datasetIndex, 1);
                            chartInstance.update();  // Update the chart to reflect the changes
                        }

                        if (pendingSwitch) {
                            document.getElementById(pendingSwitch).checked = true;
                            const pendingCoin = coins.find(coin => `${coin.id}-coinId` === pendingSwitch);
                            switchedOn.push({ id: pendingSwitch, symbol: pendingCoin.symbol });
                            symbolSwitchedOn.push(pendingCoin.symbol);
                            switchCounter++;
                            pendingSwitch = null;
                        }

                        const infoGraph = await getGraphData(symbolSwitchedOn);
                        updateGraph(infoGraph);

                        if (switchCounter === 0 && updateInterval) {
                            clearInterval(updateInterval);
                            updateInterval = null;
                        }
                    }
                });
            });
        };

        const showModal = () => {
            popoverDisappear();
            let moreThanFive = `
            <h6>You can't choose more than 5 coins at a time. Please switch off a coin to switch on another one. Here is the list of coins you already switched on:</h6>
            <div class="container">
                <div class="row">
            `;

            switchedOn.forEach((coin) => {
                moreThanFive += `
                <div class="col-6">${coin.id.replace('-coinId', '')}</div>
                <div class="col-6">
                    <button class="btn btn-danger" onclick="document.getElementById('${coin.id}').click()">Off</button>
                </div>
                `;
            });

            moreThanFive += `
                </div>
            </div>
            `;

            document.getElementById('moreThanFive').innerHTML = moreThanFive;

            const limitReachedModal = new bootstrap.Modal(document.getElementById('limitReachedModal'));
            limitReachedModal.show();
        };

        switches();

        const popoverElements = document.querySelectorAll('[data-bs-toggle="popover"]');
        popoverElements.forEach(popoverElement => {
            new bootstrap.Popover(popoverElement, {
                html: true
            });
        });

        const buttonClicked = async function () {
            toggleSpinnerPopover(true, this.id);

            let popover = bootstrap.Popover.getInstance(this);
            if (!popover) {
                popover = new bootstrap.Popover(this, {
                    html: true
                });
                popover.show();
            } else {
                bootstrap.Popover.getInstance(this).dispose();
            }

            let moreInfoStorage = [];
            try {
                moreInfoStorage = JSON.parse(localStorage.getItem('moreInfo')) || [];
                const storedCoin = moreInfoStorage.find(coin => coin.id === this.id);

                if (storedCoin) {
                    // Update popover content with stored coin data
                    this.setAttribute('data-bs-content', `<img src="${storedCoin.imageURL}" alt="${this.id}"> <br>EUR: ${storedCoin.EUR} <br>USD: ${storedCoin.USD} <br> ILS: ${storedCoin.ILS}`);
                } else {
                    // Fetch coin data
                    const coinData = await getSingleCoin(this.id);
                    const imageURL = coinData.image.thumb;
                    const euro = coinData.market_data.current_price.eur;
                    const dollar = coinData.market_data.current_price.usd;
                    const shekel = coinData.market_data.current_price.ils;
                    this.setAttribute('data-bs-content', `<img src="${imageURL}" alt="${this.id}"> <br>EUR: ${euro} <br>USD: ${dollar} <br> ILS: ${shekel}`);

                    // Store the fetched data in localStorage
                    moreInfoStorage.push({ id: this.id, imageURL: imageURL, EUR: euro, USD: dollar, ILS: shekel });
                    localStorage.setItem('moreInfo', JSON.stringify(moreInfoStorage));
                    setTimeout(() => {
                        moreInfoStorage = moreInfoStorage.filter(coin => coin.id !== this.id);
                        localStorage.setItem('moreInfo', JSON.stringify(moreInfoStorage));
                    }, 120000);

                    // Dispose and recreate the popover to update its content
                    if(popover) {
                    new bootstrap.Popover(this, {
                        html: true
                    }).show()
                }
                }
            } catch (e) {
                console.error('Failed to fetch coin data:', e);
            } finally {
                // Toggle spinner off
                toggleSpinnerPopover(false, this.id);
            }
        };

        document.querySelectorAll('#cards-container button').forEach(button => button.addEventListener('click', buttonClicked));
    };

    let chartInstance;

    const initializeGraph = () => {
        const ctx = document.getElementById('myChart').getContext('2d');
        chartInstance = new Chart(ctx, {
            type: 'line',
            data: {
                labels: [],
                datasets: []
            },
            options: {
                responsive: true,
                scales: {
                    x: {
                        display: true,
                        title: {
                            display: true,
                            text: 'Time'
                        }
                    },
                    y: {
                        display: true,
                        title: {
                            display: true,
                            text: 'USD'
                        }
                    }
                }
            }
        });
    };

    const updateGraph = (infoGraph) => {
        if (!chartInstance) {
            initializeGraph();
        }

        console.log('infoGraph:', infoGraph);  // Debug: Log the infoGraph to check its structure

        const activeSymbols = Object.keys(infoGraph);
        chartInstance.data.datasets = chartInstance.data.datasets.filter(dataset => activeSymbols.includes(dataset.label));

        activeSymbols.forEach(symbol => {
            if (!infoGraph[symbol] || !infoGraph[symbol].USD) {
                console.warn(`Missing data for symbol: ${symbol}`);  // Debug: Warn if data is missing
                return;
            }
            let dataset = chartInstance.data.datasets.find(ds => ds.label === symbol);
            const dataPoint = infoGraph[symbol].USD;

            if (dataset) {
                dataset.data.push(dataPoint);
                if (dataset.data.length > 5) {
                    dataset.data.shift();
                }
            } else {
                dataset = {
                    label: symbol,
                    data: [dataPoint],
                    borderColor: getColor(),  // Use getColor() to assign a color to the dataset
                    borderWidth: 1,
                    fill: false
                };
                chartInstance.data.datasets.push(dataset);
            }
        });

        chartInstance.data.labels.push(new Date().toLocaleTimeString());
        if (chartInstance.data.labels.length > 5) {
            chartInstance.data.labels.shift();
        }
        chartInstance.update();
    };

    const updateGraphData = async (symbols) => {
        if (symbols.length) {
            console.log(`Updating graph data for symbols: ${symbols.join(', ')}`);
            const infoGraph = await getGraphData(symbols);

            if (chartInstance) {
                updateGraph(infoGraph);
            }
        } else {
            console.log('No symbols selected for the graph.');
        }
    };

    let colorCounter = 0;
    const usedColors = new Set();
    
    const getColor = () => {
        const colors = ['blue', 'yellow', 'black', 'green', 'red', 'orange', 'purple', 'pink', 'cyan', 'magenta'];
    
        // Find the next available color
        while (usedColors.has(colorCounter % colors.length)) {
            colorCounter++;
        }
    
        const color = colors[colorCounter % colors.length];
        usedColors.add(colorCounter % colors.length);
        colorCounter++;
        return color;
    };
    
    // Function to clear used colors when a dataset is removed
    const releaseColor = (color) => {
        const colors = ['blue', 'yellow', 'black', 'green', 'red', 'orange', 'purple', 'pink', 'cyan', 'magenta'];
        const colorIndex = colors.indexOf(color);
        if (colorIndex !== -1) {
            usedColors.delete(colorIndex);
        }
    };

    try {
        const coins = await getAllCoins();
        const first100Coins = coins.slice(0, 100);
        renderCoins(first100Coins);

        document.getElementById('searchButton').addEventListener('click', async () => {
            try {
                toggleSpinner(true);
                const search = document.getElementById('coin-search').value;
                const filtered = coins.filter(coin => coin.id.includes(search)).slice(0, 100);
                renderCoins(filtered);
                toggleSpinner(false);
            } catch (e) {
                console.warn(e);
                toggleSpinner(false);
            }
        });

        initializeGraph();

    } catch (e) {
        console.error('Failed to initialize:', e);
        toggleSpinner(false);
    }

    document.getElementById('profile-tab').addEventListener('click', async () => {
        popoverDisappear();
    });

    document.getElementById('contact-tab').addEventListener('click', async () => {
        popoverDisappear();
    });

})();