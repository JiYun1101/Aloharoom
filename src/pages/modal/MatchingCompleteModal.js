import React from "react";
import { Modal } from "antd";

const MatchingCompleteModal = ({
    isMatchingCompleteModalOpen,
    handleOk,
    handelCancel,
}) => {
    return (
        <Modal title ="매칭 완료" 
            open={isMatchingCompleteModalOpen}
            onOk={handleOk}
            centered
            onCancel={handelCancel}
            width={500}
        >
            <div>매칭 완료 하시겠습니까?</div>
        </Modal>

    );
}

export default MatchingCompleteModal;