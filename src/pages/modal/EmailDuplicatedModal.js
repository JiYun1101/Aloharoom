import React from "react";
import { Modal } from "antd";

const EmailDuplicatedModal = ({
    isEmailDuplicatedModalOpen,
    handleOk,
    handelCancel,
}) => {
    return (
        <Modal title ="이메일 중복 확인" 
            open={isEmailDuplicatedModalOpen}
            onOk={handleOk}
            centered
            onCancel={handelCancel}
            width={500}
        >
            <div>중복된 이메일입니다. 다른 이메일 사용하세요.</div>
        </Modal>

    );
}

export default EmailDuplicatedModal