import FuseAnimate from '@fuse/core/FuseAnimate';
import FusePageSimple from '@fuse/core/FusePageSimple';
import Avatar from '@material-ui/core/Avatar';
//import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Typography from '@material-ui/core/Typography';
import React, { useState } from 'react';
import AboutTab from './tabs/AboutTab';
/* import PhotosVideosTab from './tabs/PhotosVideosTab'; */
import TimelineTab from './tabs/TimelineTab';

const useStyles = makeStyles(theme => ({
	layoutHeader: {
		height: 320,
		minHeight: 320,
		[theme.breakpoints.down('md')]: {
			height: 240,
			minHeight: 240
		}
	}
}));

function userpref() {
	let vecuser = JSON.parse(sessionStorage.getItem("jwt_access_data"))
//	console.log(vecuser)
	return vecuser.displayName + "*" + vecuser.photoURL
}

function ProfilePage() {
	const classes = useStyles();
	const [selectedTab, setSelectedTab] = useState(0);

	function handleTabChange(event, value) {
		setSelectedTab(value);
	}


	return (
		<FusePageSimple
			classes={{
				header: classes.layoutHeader,
				toolbar: 'px-16 sm:px-24'
			}}
			header={
				<div className="p-24 flex flex-1 flex-col items-center justify-center md:flex-row md:items-end">
					<div className="flex flex-1 flex-col items-center justify-center md:flex-row md:items-center md:justify-start">
						<FuseAnimate animation="transition.expandIn" delay={300} className="mr-96">
							
							<Avatar className="w-96 h-96" src={userpref().split('*')[1]} />
						</FuseAnimate>
						<FuseAnimate animation="transition.slideLeftIn" delay={300}>
							<Typography
								className="md:mx-24 text-24 md:text-32 my-8 md:my-0"
								variant="h4"
								color="inherit"
							> 
							{userpref().split('*')[0]}
							</Typography>
						</FuseAnimate>
					</div>

					{/* <div className="flex items-center justify-end">
						<Button className="mx-8 normal-case" variant="contained" color="secondary" aria-label="Follow">
							Follow
						</Button>
						<Button className="normal-case" variant="contained" color="primary" aria-label="Send Message">
							Send Message
						</Button>
					</div> */}
				</div>
			}
			contentToolbar={
				<Tabs
					value={selectedTab}
					onChange={handleTabChange}
					indicatorColor="primary"
					textColor="primary"
					variant="scrollable"
					scrollButtons="off"
					classes={{
						root: 'h-64 w-full'
					}}
				>
					<Tab
						classes={{
							root: 'h-64'
						}}
						label="Timeline"
					/>
					<Tab
						classes={{
							root: 'h-64'
						}}
						label="About"
					/>
					<Tab
						classes={{
							root: 'h-64'
						}}
						label="Photos & Videos"
					/>
				</Tabs>
			}
			content={
				<div className="p-16 sm:p-24">
					{selectedTab === 0 && <AboutTab />}
					{selectedTab === 1 && <AboutTab />}
					{selectedTab === 2 && <TimelineTab />}
				</div>
			}
		/>
	);
}

export default ProfilePage;
