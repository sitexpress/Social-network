import React, {ChangeEvent, useState} from "react";
import s from './MyPosts.module.css'
import {Post} from "../Post/Post";
import {MapConnectPostType} from "../MyPostContainer/MyPostContainer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../../common/FormsControls/FormsControls";


const maxLength10 = maxLengthCreator(10)


export const MyPosts = (props:MapConnectPostType) => {

    const addNewPost = (values:AddMyPostFormDateType) => {
        props.callBackOnAdd(values.newPostData)
    }

    return <div className={s.myposts}>
                <div className={s.myposts__textsender}>
                    <AddMyPostFormRedux onSubmit={addNewPost}/>
                    <Post postData={props.profilePage.postData}/>
                </div>
            </div>

}

type AddMyPostFormDateType = {
    newPostData: string
    onSubmit: () => void
}

const AddMyPostForm: React.FC<InjectedFormProps<AddMyPostFormDateType>> = ({...props}) => {

    return <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    component={Textarea}
                    name={"newPostData"}
                    placeholder={"Enter your post here..."}
                    validate={[required, maxLength10]}
                />
            </div>
            <div>
                <button>Post</button>
            </div>
        </form>
}

const AddMyPostFormRedux = reduxForm<AddMyPostFormDateType>({form:"postForm"})(AddMyPostForm)