import React from "react";
import {
  Authenticator,
  Text,
  View,
  Heading,
  Image,
  Button,
  Grid,
  Flex,
  useAuthenticator,
  useTheme,
} from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import styled from "styled-components";

const components = {
  Header() {
    return (
      <View textAlign="center">
        <Image
          width="15rem"
          height="15rem"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          padding="0"
          objectFit="cover"
          src="https://mbxe81.p3cdn1.secureserver.net/wp-content/uploads/2019/08/cropped-DAS-logo-for-web.png"
          alt="DASN Logo"
        ></Image>
      </View>
    );
  },

  Footer() {
    const { tokens } = useTheme();

    return (
      <View textAlign="center" padding={tokens.space.large}>
        <Text color={tokens.colors.neutral[80]} fontSize={tokens.fontSizes.xs}>
          &copy; All Rights Reserved Dallas After School Network
        </Text>
      </View>
    );
  },

  SignIn: {
    Footer() {
      const { toForgotPassword } = useAuthenticator();

      return (
        <View textAlign="center">
          <Button
            fontWeight="normal"
            onClick={toForgotPassword}
            size="small"
            variation="link"
          >
            Reset Password
          </Button>
        </View>
      );
    },
  },
  ConfirmSignIn: {
    Header() {
      const { tokens } = useTheme();
      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={3}
        >
          Enter Information:
        </Heading>
      );
    },
    Footer() {
      return <Text>Footer Information</Text>;
    },
  },
  ForgotPassword: {
    Header() {
      const { tokens } = useTheme();
      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={3}
        >
          Enter Information:
        </Heading>
      );
    },
    Footer() {
      return <Text>Footer Information</Text>;
    },
  },
  ConfirmResetPassword: {
    Header() {
      const { tokens } = useTheme();
      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={3}
        >
          Enter Information:
        </Heading>
      );
    },
    Footer() {
      return <Text>Footer Information</Text>;
    },
  },
};

const formFields = {
  signIn: {
    username: {
      placeholder: "program.manager@gmail.com",
    },
    password: {
      placeholder: "",
    },
  },
  forceNewPassword: {
    password: {
      placeholder: "",
    },
  },
  forgotPassword: {
    username: {
      placeholder: "program.manager@gmail.com",
    },
  },
  confirmResetPassword: {
    confirmation_code: {
      placeholder: "Confirmation Code:",
      label: "New Label",
      isRequired: false,
    },
    confirm_password: {
      placeholder: "",
    },
  },
  confirmSignIn: {
    confirmation_code: {
      label: "New Label",
      placeholder: "Confirmation Code:",
      isRequired: false,
    },
  },
};

const StyledAuthenticator = styled(Authenticator)`
  [data-amplify-router] {
    border-style: unset;
    border-width: unset;
    border-color: unset;
    box-shadow: unset;
    background-color: unset;
  }
`;

const DASNAuthenticator = (props) => {
  const { tokens } = useTheme();

  return (
    <StyledAuthenticator
      hideSignUp={true}
      formFields={formFields}
      components={components}
    >
      {props.children}
    </StyledAuthenticator>
  );
};

export default DASNAuthenticator;
