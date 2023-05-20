import React from "react";
import { Modal } from "antd";

const NickNameDuplicatedModal = ({
    isNickNameDuplicatedModalOpen,
    handleOk,
    handelCancel,
}) => {
    return (
        <Modal title ="닉네임 중복 확인" 
            open={isNickNameDuplicatedModalOpen}
            onOk={handleOk}
            centered
            onCancel={handelCancel}
            width={500}
        >
            <div>중복된 닉네임입니다. 다른 닉네임 사용하세요.</div>
        </Modal>

    );
}

export default NickNameDuplicatedModal