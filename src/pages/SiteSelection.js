import React from 'react';
import { DropdownSelector } from "../ui-components";
import { getProgramManager } from '../services/api.service';
import { useNavigate } from 'react-router-dom';
import useStore from '../store/store';

const SiteSelection = ({user}) => {
    const store = useStore();
    const navigate = useNavigate();

    const [selectedSite, setSelectedSite] = React.useState((useStore((state) => state.currentSite)));
    const [pm, setPm] = React.useState();
    
    const email = user.signInDetails.loginId;
    
    React.useEffect(() => {
        const fetchData = async () => {
            const pm = await getProgramManager(email);
            setPm(pm);
            store.setPm(pm);
        };
        fetchData();
    }, [email]);
    
    const onSiteSelect = (event) => {
        setSelectedSite(pm?.sites.find((site) => site.name === event.target.value));
    };
    const onConfirmClick = () => {
        store.setSite(selectedSite);
        navigate('/check-in');
    }

    return (<>
        <div>Site Selection</div>
        <DropdownSelector overrides={{ 
            SelectField: { 
                placeholder: 'Select Site',
                options: pm?.sites.map((site) => site?.name),
                onChange: (event) => onSiteSelect(event),
            }
        }}>
        </DropdownSelector>
        <button type="button" onClick={onConfirmClick}>Confirm</button>
    </>);
}

export default SiteSelection;