import React from "react";
import { Modal } from "antd";

const MyProfileUpdateModal = ({
    isMyProfileUpdateModalOpen,
    handleOk,
    handelCancel,
}) => {
    return (
        <Modal title ="내 정보 수정" 
            open={isMyProfileUpdateModalOpen}
            onOk={handleOk}
            centered
            onCancel={handelCancel}
            width={500}
        >
            <div>내 정보 수정 모달</div>
        </Modal>

    );
}

export default MyProfileUpdateModal;