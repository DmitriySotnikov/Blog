import React, {FC} from 'react';
import {Pagination, Row} from 'antd';
import {useAppDispatchBind, useAppSelector} from "../../../../hooks/redux";


export const PaginationElem: FC = () => {

    const {totalPage, currentPage} = useAppSelector(state => state.articles)
    const {setCurrentPage} = useAppDispatchBind()

    return (
        <Row justify={'center'} style={{marginBottom: '3vh'}}>
            <Pagination
                defaultCurrent={1}
                total={totalPage}
                defaultPageSize={5}
                onChange={(page) => setCurrentPage(page)}
                current={currentPage}
            />
        </Row>
    );
};