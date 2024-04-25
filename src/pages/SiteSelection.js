import React from 'react';
import { DropdownSelector } from "../ui-components";
import { getProgramManager } from '../services/api.service';
import { useNavigate, useLocation } from 'react-router-dom';
import useStore from '../store/store';
import ButtonConfirmPickUp from '../ui-components/ButtonConfirmPickUp';

const SiteSelection = ({user}) => {
    const store = useStore();
    const navigate = useNavigate();
    const location = useLocation();
    const [selectedSite, setSelectedSite] = React.useState((useStore((state) => state.currentSite)));
    const [pm, setPm] = React.useState();
    
    const email = user.signInDetails.loginId;
    
    React.useEffect(() => {
        const fetchData = async () => {
            const pm = await getProgramManager(email);
            setPm(pm);
            store.setPm(pm);
        };
        if (store.pm) {
            setPm(store.pm);
        } else {
            fetchData();
        }
    }, [email]);
    
    const onSiteSelect = (event) => {
        setSelectedSite(pm?.sites?.find((site) => site.name === event.target.value));
    };
    const onConfirmClick = () => {
        store.setSite(selectedSite);
        if (isOnSiteSelectionPage()) {
            navigate('/check-in');
        } else {
            navigate(location.pathname);
        }
    }

    const dropdownOverrides = { 
        SelectField: { 
            placeholder: 'Select Site',
            options: pm?.sites.map((site) => site?.name),
            defaultValue: store.currentSite?.name,
            onChange: (event) => onSiteSelect(event),
            width: '300px',
        },
        DropdownSelector6031537: {
            padding: '0px 0px 16px',
        },
    };

    const confirmButtonOverrides = {
        ButtonConfirmPickUp6153951: {
            isDisabled: !selectedSite,
            children: 'Confirm',
            width: '300px',
            onClick: onConfirmClick,
        },
    };
    
    const isOnSiteSelectionPage = () => {
        return location.pathname.includes('site-selection');
    }

    const ShowLogo = () => {
        return isOnSiteSelectionPage() ? (<img style={{width: '15rem', height: '15rem'}}
            src="https://mbxe81.p3cdn1.secureserver.net/wp-content/uploads/2019/08/cropped-DAS-logo-for-web.png"
          ></img>) : null;
    }

    return (<>
        <div className={isOnSiteSelectionPage() ? 'site-selection-page' : null}>
            <ShowLogo></ShowLogo>
            <h3 className='site-selection-header'>Site Selection</h3>
            <DropdownSelector overrides={dropdownOverrides}>
            </DropdownSelector>
            <ButtonConfirmPickUp overrides ={confirmButtonOverrides} ></ButtonConfirmPickUp>
        </div>
    </>);
}

export default SiteSelection;