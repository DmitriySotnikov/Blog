import './style.css'
import moment from 'moment';
import React, {ChangeEvent, FC, useState} from 'react';
import {Form, Button} from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import {IArticle} from "../../models/IArticle";
import {useAppDispatchBind, useAppSelector} from "../../hooks/redux";
import { Confirmation } from '../../components/common/ordinary/Confirmation';
import {ArticleInput} from "../../components/common/ordinary/ArticleInput";
import { rules } from '../../util/rules';


export const PostArticle: FC = () => {

    const initialArticleState = {
        author: '',
        preview: '',
        title: '',
        contentArticle: '',
        id: 0,
        date: ''
    }

    const [Article, setPostArticle] = useState<IArticle>(initialArticleState)

    const {postArticle} = useAppDispatchBind()

    const {statusArticle, setResponseLoading} = useAppSelector(state => state.articles)

    const [form] = Form.useForm();

    const onReset = () => {
        form.resetFields();
    };

    const onFinish = () => {
        try {
            const dateNow = moment().format('LL')
            const data = {...Article, date: dateNow}
            postArticle(data)
        } catch (errInfo) {
            alert(errInfo)
        } finally {
            if (!statusArticle){
                form.resetFields()
            }
        }
    };

    const authorHandler = (e: ChangeEvent<HTMLInputElement>
    ) => setPostArticle({...Article, author: e.target.value})

    const previewHandler = (e: ChangeEvent<HTMLInputElement>
    ) => setPostArticle({...Article, preview: e.target.value})

    const titleHandler = (e: ChangeEvent<HTMLInputElement>
    ) => setPostArticle({...Article, title: e.target.value})


    return ( statusArticle ? <Confirmation /> :
        <div className='content'>
            <div className='titleArticlesForm'>
                <span>Здесь вы можете написать свою статью</span>
                <br/>
                <br/>
                {moment().format('LL')}
            </div>
            <Form form={form} layout="horizontal" onFinish={onFinish}>
                <ArticleInput
                    formName= {"author"}
                    formLabel= {"Ваще имя"}
                    formValue ={Article.author}
                    onchangeHandler={authorHandler}
                />
                <ArticleInput
                    formName= {"preview"}
                    formLabel= {"Тема ваще статьи"}
                    formValue ={Article.preview}
                    onchangeHandler={previewHandler}
                />
                <ArticleInput
                    formName= {"title"}
                    formLabel= {"Заголовок вашей статьи"}
                    formValue ={Article.title}
                    onchangeHandler={titleHandler}
                />
                    <Form.Item
                        name="contentArticle"
                        label="Текст вашей статьи"
                        labelCol={{span: 6}}
                        wrapperCol={{span: 16}}
                        rules={[rules.required()]}
                    >
                        <TextArea
                            showCount maxLength={500}
                            style={{ height: 150 }}
                            value={Article.contentArticle}
                            onChange={e => setPostArticle({...Article, contentArticle: e.target.value})}
                        />
                    </Form.Item>
                    <Form.Item wrapperCol={{span: 14, offset: 6}}>
                        <Button
                            htmlType="submit"
                            type="primary"
                            disabled={setResponseLoading}
                        >
                            Submit
                        </Button>
                        &nbsp;&nbsp;&nbsp;
                        <Button htmlType="button" onClick={onReset}>
                            Reset
                        </Button>
                    </Form.Item>
            </Form>
        </div>
);
};