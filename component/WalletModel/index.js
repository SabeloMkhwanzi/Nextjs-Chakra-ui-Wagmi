import React from "react";
import { Box, HStack, useDisclosure } from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Button,
} from "@chakra-ui/react";

import { useConnect, useAccount, useBalance } from "wagmi";

export default function WalletModel() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  // Wallet connect function
  const [{ data: connectData, error: connectError }, connect] = useConnect();
  // Connected account details
  const [{ data: accountData }, disconnect] = useAccount({
    fetchEns: true,
  });

  // Fetching balance information
  const [{ data: getBalance }] = useBalance({
    addressOrName: accountData?.address,
  });

  if (accountData) {
    return (
      <Box>
        <Box>
          {accountData.ens?.name
            ? `${accountData.ens?.name} (${accountData.address})`
            : accountData.address}
        </Box>
        <Box>
          <h6>
            {" "}
            Acc Balance:{`${Number(getBalance?.formatted).toFixed(3)} Ether`}
          </h6>
        </Box>
        <Button onClick={disconnect}>Disconnect</Button>
      </Box>
    );
  }
  return (
    <>
      <Button onClick={onOpen}>Connect</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>SELECT WALLET!</ModalHeader>

          <ModalBody>
            {connectData.connectors.map((x) => (
              <HStack key={x.id}>
                <Button
                  borderRadius="full"
                  bgColor="blue.900"
                  disabled={!x.ready}
                  onClick={() => connect(x)}
                >
                  {`${x.name}${!x.ready ? " (unsupported)" : ""}`}
                </Button>
              </HStack>
            ))}
          </ModalBody>

          <ModalFooter>
            {connectError && (
              <Box>{connectError?.message ?? "Failed to connect"}</Box>
            )}
            <Button colorScheme="RED" mr={3} onClick={onClose}>
              CANCEL
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
