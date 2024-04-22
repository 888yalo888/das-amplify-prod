import React from 'react';
import { DropdownSelector } from "../ui-components";
import { getProgramManager } from '../services/api.service';
import { useNavigate } from 'react-router-dom';

const SiteSelection = ({user}) => {
    const navigate = useNavigate();
    const email = user.signInDetails.loginId;
    const [pm, setPm] = React.useState();
    React.useEffect(() => {
        const fetchData = async () => {
            setPm(await getProgramManager(email));
        };
        fetchData();
    })
    getProgramManager(email).then(async (result) => {
        setPm(result);
    });
    
    const [selectedSite, setSelectedSite] = React.useState();
    const onSiteSelect = (event) => {
        setSelectedSite(pm?.sites.find((site) => site.name === event.target.value)?.id);
    };
    const onConfirmClick = () => {
        navigate(`/check-in`, { state: { siteId: selectedSite}});
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