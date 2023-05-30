import React from "react";
import { Modal } from "antd";

const EmailNotDuplicatedModal = ({
    isEmailNotDuplicatedModalOpen,
    handleOk,
    handelCancel,
}) => {
    return (
        <Modal title ="이메일 중복 확인" 
            open={isEmailNotDuplicatedModalOpen}
            onOk={handleOk}
            centered
            onCancel={handelCancel}
            width={500}
        >
            <div>사용가능한 이메일입니다.</div>
        </Modal>
    );
}

export default EmailNotDuplicatedModal