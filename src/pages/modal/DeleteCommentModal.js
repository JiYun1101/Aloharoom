import React from "react";
import { Modal } from "antd";

const DeleteCommentModal = ({
    isDeleteCommentModalOpen,
    handleOk,
    handelCancel,
}) => {
    return (
        <Modal title ="댓글 삭제" 
            open={isDeleteCommentModalOpen}
            onOk={handleOk}
            centered
            onCancel={handelCancel}
            width={500}
        >
            <div>댓글을 삭제하시겠습니까?</div>
        </Modal>

    );
}

export default DeleteCommentModal;