import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";

type ICustomModal = {
  isOpen: boolean;
  handleClose: () => void;
};

const CustomModal = (props: React.PropsWithChildren<ICustomModal>) => {
  return (
    <Modal
      isCentered
      isOpen={props.isOpen}
      onClose={() => props.handleClose()}
      motionPreset="slideInBottom"
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Form Data</ModalHeader>
        <ModalCloseButton />
        <ModalBody>{props.children}</ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default CustomModal;
