import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { YouthUpdateForm } from '../ui-components';
import { Badge, Flex, Icon, Text, View } from "@aws-amplify/ui-react";


function UpdateYouth() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <View
          width="24px"
          height="24px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          overflow="hidden"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
        >
          <Icon
            width="22.09px"
            height="22.08px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 22.086091995239258,
              height: 22.079999923706055,
            }}
            paths={[
              {
                d: "M20.325 0C19.8731 0 19.4081 0.166875 19.065 0.51L18.42 1.17L20.91 3.66C20.9081 3.66187 21.57 3.015 21.57 3.015C22.2581 2.32687 22.2581 1.19813 21.57 0.51C21.225 0.165 20.7769 0 20.325 0ZM17.64 1.89L6.735 12.795L6.705 12.945L6.255 15.27L6.105 15.975L6.81 15.825L9.135 15.375L9.285 15.345L20.19 4.44L19.5 3.765L8.82 14.43L7.65 13.26L18.315 2.58L17.64 1.89ZM0.48 3.84C0.21375 3.84 0 4.05562 0 4.32L0 21.6C0 21.8644 0.21375 22.08 0.48 22.08L17.76 22.08C18.0262 22.08 18.24 21.8644 18.24 21.6L18.24 7.68L17.28 8.64L17.28 21.12L0.96 21.12L0.96 4.8L13.44 4.8L14.4 3.84L0.48 3.84Z",
                fill: "rgba(0,0,0,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="4%"
            bottom="4%"
            left="4%"
            right="3.97%"
            onClick={handleShow}
          ></Icon>
        </View>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Youth</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <YouthUpdateForm></YouthUpdateForm>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default UpdateYouth;