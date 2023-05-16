import React from "react";
import { Modal } from "antd";

const LogoutModal = ({
    isLogoutModalOpen,
    handleOk,
    handelCancel,
}) => {
    return (
        <Modal title ="로그아웃" 
            open={isLogoutModalOpen}
            onOk={handleOk}
            centered
            onCancel={handelCancel}
            width={500}
        >
            <div>로그아웃 하시겠습니까?</div>
        </Modal>

    );
}

export default LogoutModal;