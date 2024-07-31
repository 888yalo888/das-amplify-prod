
import React from 'react';
import { PMHeader } from '../ui-components';
import { useLocation } from 'react-router-dom';
import useStore from '../store/store';
import { Tooltip } from 'react-tooltip';
import SiteSelection from './SiteSelection';
import { Button, useAuthenticator } from "@aws-amplify/ui-react";

const Header = () => {
    const { signOut, user } = useAuthenticator(
        ({ signOut, user, authStatus }) => [signOut, user, authStatus]
      );
    const location = useLocation();
    const site = useStore((state) => state.currentSite);
    const store = useStore();
    const onSignOutClick = () => {
        signOut();
        store.clearAll();
    }

    const headerOverrides = {
        Heading59311361: {
            children: site?.name,
        },
        MyIcon: {
            className: 'header-btn',
        }, 
        'Profile Bug': {
            onClick: () => {},
            className: 'profile-icon',
        },
        Heading59311360: {
            children: `${store.pm?.fullName.split(' ')[0][0]}${store.pm?.fullName.split(' ')[1][0]}`
        }
    };

    function ShowHeader() {
        if (!site || location.pathname.includes('/site-selection')) {
          return null;
        }
        return <PMHeader width="100%"  overrides={headerOverrides} />;
      }
    
    return (
        <>
            <Tooltip className="site-selection-tooltip" anchorSelect=".header-btn" clickable openOnClick variant="light" border="1px solid black">
                <SiteSelection user={user}></SiteSelection>
            </Tooltip>
            <ShowHeader></ShowHeader>
            <Tooltip anchorSelect=".profile-icon" clickable openOnClick variant="light" border="1px solid black">
                <Button
                    fontWeight="normal"
                    onClick={onSignOutClick}
                    size="small"
                    variation="link"
                >
                    Sign Out
                </Button>
                {/* <button onClick={onSignOutClick}>Sign out</button> */}
            </Tooltip>
        </>
    );
}

export default Header;