"use client";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { Input } from "@nextui-org/react";
import { Textarea } from "@nextui-org/react";

export default function Contact() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <section className="flex items-center justify-center mb-20">
      <Button
        className="font-medium mt-8"
        variant="shadow"
        color="danger"
        onPress={onOpen}
      >
        Get In Touch
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Lets Build Something Great Together
              </ModalHeader>
              <ModalBody>
                <Input
                  isRequired
                  type="Name"
                  label="Name"
                  variant="bordered"
                  errorMessage="Please enter Your Name"
                  className="max-w-xs"
                />
                <Input
                  isRequired
                  type="email"
                  label="Email"
                  variant="bordered"
                  errorMessage="Please enter a valid email"
                  className="max-w-xs"
                />
                <Textarea
                  isRequired
                  label="Message"
                  placeholder="Enter your Message"
                  className="max-w-xs"
                />
              </ModalBody>
              <ModalFooter>
                <Button color="primary" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="danger" onPress={onClose}>
                  Send
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>

    </section>
  );
}
