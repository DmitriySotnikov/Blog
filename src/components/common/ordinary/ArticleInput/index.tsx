import React, {ChangeEvent, FC} from 'react';
import {Form, Input} from "antd";
import { rules } from '../../../../util/rules';

interface IArticleInput {
    formName: string,
    formLabel: string,
    formValue: string,
    onchangeHandler: (e: ChangeEvent<HTMLInputElement>) => void
}

export const ArticleInput: FC<IArticleInput> = (prop) => {
    return (
        <Form.Item
            name={prop.formName}
            label={prop.formLabel}
            labelCol={{span: 6}}
            wrapperCol={{span: 16}}
            rules={[rules.required()]}
        >
            <Input
                value={prop.formValue}
                onChange={prop.onchangeHandler}
            />
        </Form.Item>
    )
};