import { useForm } from 'react-hook-form'
import './NewComment.css'
import CommentDraft from '../../../models/comment/CommentDraft'
import Comment from '../../../models/comment/Comment'
import commentsService from '../../../services/comments'
import { useState } from 'react'
import Loading from '../../common/loading/Loading'

interface NewCommentProps{
    postId: string,
    addComment(comment: Comment): void
}
export default function NewComment(props: NewCommentProps): JSX.Element {

    const { postId, addComment } = props

    const [loading, setLoading] = useState<boolean>(false);

    const { 
        register, 
        handleSubmit, 
        formState, 
        reset 
    } = useForm<CommentDraft>()  

    async function submit(draft: CommentDraft) {
        try {
            setLoading(true)
            const newComment = await commentsService.create(postId, draft)
            reset()
            addComment(newComment)
            setLoading(false)
        } catch (e) {
            alert(e)
            setLoading(false)
        }
    }

    return (
        <div className='NewComment'>

             { loading && <Loading message='Adding comment'/>}
            
            { !loading && <>
            <form onSubmit={handleSubmit(submit)}>
                <textarea {...register('body', {
                    required: {
                        value: true,
                        message: 'Comment body is mandatory'
                    },
                    minLength: {
                        value: 20,
                        message: 'comment must be at least 20 chars long'
                    }
                })}></textarea>
                <span className="error">{formState.errors.body?.message}</span>
                <button>Post Comment</button>
            </form>
            </>}
        </div>
    )
}