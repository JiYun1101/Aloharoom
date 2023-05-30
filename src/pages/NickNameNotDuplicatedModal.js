import React from "react";
import { Modal } from "antd";

const NickNameNotDuplicatedModal = ({
  isNickNameNotDuplicatedModalOpen,
  handleOk,
  handelCancel,
}) => {
  return (
    <Modal
      title="닉네임 중복 확인"
      open={isNickNameNotDuplicatedModalOpen}
      onOk={handleOk}
      centered
      onCancel={handelCancel}
      width={500}
    >
      <div>사용가능한 닉네임입니다.</div>
    </Modal>
  );
};

export default NickNameNotDuplicatedModal;
