
import React from 'react';
import { PMHeader } from '../ui-components';
import { useLocation, useNavigate } from 'react-router-dom';
import useStore from '../store/store';

const Header = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const site = useStore((state) => state.currentSite);
    const onHeaderClick = () => {
        navigate('/site-selection');
    };

    const headerOverrides = {
        Heading59311361: {
            children: site?.name,
        },
        MyIcon: {
            onClick: onHeaderClick,
            className: 'header-btn',
        }, 
    };

    function ShowHeader() {
        if (!site || location.pathname.includes('/site-selection')) {
          return null;
        }
        return <PMHeader width="100%"  overrides={headerOverrides} />;
      }
    
    return (
        <>
            <ShowHeader></ShowHeader>
        </>
    );
}

export default Header;