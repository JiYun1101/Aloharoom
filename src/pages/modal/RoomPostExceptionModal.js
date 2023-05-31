import React from "react";
import { Modal } from "antd";

const RoomPostExceptionModal = ({
    isRoomPostExceptionModalOpen,
    handleOk,
    handelCancel,
}) => {
    return (
        <Modal title={`방 수정/생성 오류`}
            open={isRoomPostExceptionModalOpen}
            onOk={handleOk}
            centered
            onCancel={handelCancel}
            width={500}
        >
            <div>데이터가 모두 입력되지 않았습니다.</div>
        </Modal>
    );
}

export default RoomPostExceptionModal