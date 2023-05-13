import React from "react";
import { Modal } from "antd";

const DeletePostModal = ({
    isDeletePostModalOpen,
    handleOk,
    handelCancel,
}) => {
    return (
        <Modal title ="게시글 삭제" 
            open={isDeletePostModalOpen}
            onOk={handleOk}
            centered
            onCancel={handelCancel}
            width={500}
        >
            <div>게시글을 삭제하시겠습니까?</div>
        </Modal>

    );
}

export default DeletePostModal;