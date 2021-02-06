import FuseAnimate from '@fuse/core/FuseAnimate';
import FuseAnimateGroup from '@fuse/core/FuseAnimateGroup';
import FusePageSimple from '@fuse/core/FusePageSimple';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import { red, green } from '@material-ui/core/colors';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import { darken } from '@material-ui/core/styles/colorManipulator';
//import axios from 'axios';
import clsx from 'clsx';
import React from 'react';


//import { dark } from '@material-ui/core/styles/createPalette';
/* const useStyles = makeStyles({
	title: {
		color: blue[800]
	},
	url: {
		color: green[800]
	}
}); */

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	paper: {
		padding: theme.spacing(2),
		color: theme.palette.text.secondary,
	},
	paperh: {
		padding: theme.spacing(2),
		color: theme.palette.text.primary,
	},
	title: {
		color: green[800]
	},
	url: {
		color: red[800]
	},
	card: {
		backgroundColor: darken(theme.palette.background.paper, theme.palette.type === 'light' ? 0.01 : 0.25)
	}
}));

function ModernSearchPage() {
	const classes = useStyles();
	//const theme = useTheme();
	//const [data, setData] = useState([]);

	/* useEffect(() => {
		axios.get('/api/search').then(res => {
			setData(res.data);
		});
	}, []); */

	return (
		<FusePageSimple
			header={
				<div className="flex flex-1 items-center justify-between p-8 sm:p-24 relative">
					<div className="flex flex-shrink items-center sm:w-512">
						
						<div className="flex items-center">
							<FuseAnimate animation="transition.expandIn" delay={300}>
								<img className="w-128" src="assets/images/profile/undraw_in_progress_ql66.svg" alt="logo" />
							</FuseAnimate>
							<FuseAnimate animation="transition.slideLeftIn" delay={300}>
								<Typography variant="h6" className="mx-24 hidden sm:flex" style={{ width: '100%' }}>
									Operaciones Comerciales y Contabels
						</Typography>
							</FuseAnimate>
						</div>
					</div>

					<div className="flex flex-1 items-center justify-end">
						<Grid item xs={6} sm={6}>
							<Card className={clsx(classes.card, 'w-320 mx-8 sm:mx-12 rounded-8')} square>
								{/*  <Button variant="contained" size="large" color="secondary">Ingresar</Button> */}
								<Button size="large" color="secondary" style={{ width: '100%' }}>
									<Icon className="text-32 text-red">add_circle</Icon>
									<span className="mx-8">Ver catalogo</span>
								</Button>
							</Card>
						</Grid>
					</div>
				</div>
			}
			content={
				<div className="p-16 pt-0 sm:p-24 sm:pt-0 max-w-md">
					{/* <FuseAnimate delay={200}>
						<Typography color="textSecondary" className="text-13 mx-16 my-24">
							{data.length} results
						</Typography>
					</FuseAnimate> */}

					<FuseAnimateGroup
						enter={{
							animation: 'transition.slideUpBigIn'
						   }}
					   >
						     <Grid container spacing={6}>
								<Grid item xs={5} sm={5}>
								<Paper className={classes.paper}>
									<Grid container spacing={0}>
										<Grid item xs={3}>
											<Typography variant="overline" className="MuiCardContent-root flex flex-col items-left">
												<img className="w-256" src="assets/images/profile/undraw_nuxt_js_0fq9.svg" alt="logo" />
											</Typography>
										</Grid>
										<Grid item xs={9}>
											<Typography component="div" className={clsx(classes.title, 'text-18 cursor-pointer')}>
												ACTIVOS
													<Typography style={{float: 'right'}}>
													<Button variant="contained" size="large" color="secondary" className={clsx('pull-right')}>Ingresar</Button>
												</Typography>
										</Typography>
										<Typography className={clsx(classes.url)}>
												10 Registros
										   </Typography>
											<Typography className="text-15">
												Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits.
										   </Typography>
										   </Grid>
									  </Grid>
									</Paper>
							</Grid>
							<Grid item xs={5} sm={5}>
								<Paper className={classes.paper}>
									<Grid container spacing={0}>
										<Grid item xs={3}>
											<Typography variant="overline" className="MuiCardContent-root flex flex-col items-left">
												<img className="w-256" src="assets/images/profile/undraw_Accept_request_re_d81h.svg" alt="logo" />
											</Typography>
										</Grid>
										<Grid item xs={9}>
											<Typography component="div" className={clsx(classes.title, 'text-18 cursor-pointer')}>
												PASIVOS
													<Typography style={{ float: 'right' }}>
													<Button variant="contained" size="large" color="secondary" className={clsx('pull-right')}>Ingresar</Button>
												</Typography>
											</Typography>
											<Typography className={clsx(classes.url)}>
												10 Registros
										   </Typography>
											<Typography className="text-15">
												Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits.
										   </Typography>
										</Grid>
									</Grid>
								</Paper>
							</Grid>
							<Grid item xs={5} sm={5}>
								<Paper className={classes.paper}>
									<Grid container spacing={0}>
										<Grid item xs={3}>
											<Typography variant="overline" className="MuiCardContent-root flex flex-col items-left">
												<img className="w-256" src="assets/images/profile/undraw_Savings_re_eq4w%20(1).svg" alt="logo" />
											</Typography>
										</Grid>
										<Grid item xs={9}>
											<Typography component="div" className={clsx(classes.title, 'text-18 cursor-pointer')}>
												PATRIMONIO
													<div style={{ float: 'right' }}>
													<Button variant="contained" size="large" color="secondary" className={clsx('pull-right')}>Ingresar</Button>
												</div>
											</Typography>
											<Typography className={clsx(classes.url)}>
												10 Registros
										   </Typography>
											<Typography className="text-15">
												Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits.
										   </Typography>
										</Grid>
									</Grid>
								</Paper>
							</Grid>
							<Grid item xs={5} sm={5}>
								<Paper className={classes.paper}>
									<Grid container spacing={0}>
										<Grid item xs={3}>
											<Typography variant="overline" className="MuiCardContent-root flex flex-col items-left">
												<img className="w-256" src="assets/images/profile/undraw_Select_re_3kbd.svg" alt="logo" />
											</Typography>
										</Grid>
										<Grid item xs={9}>
											<Typography component="div" className={clsx(classes.title, 'text-18 cursor-pointer')}>
												INGRESOS
													<div style={{ float: 'right' }}>
													<Button variant="contained" size="large" color="secondary" className={clsx('pull-right')}>Ingresar</Button>
												</div>
											</Typography>
											<Typography className={clsx(classes.url)}>
												10 Registros
										   </Typography>
											<Typography className="text-15">
												Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits.
										   </Typography>
										</Grid>
									</Grid>
								</Paper>
							</Grid>
							<Grid item xs={5} sm={5}>
								<Paper className={classes.paper}>
									<Grid container spacing={0}>
										<Grid item xs={3}>
											<Typography variant="overline" className="MuiCardContent-root flex flex-col items-left">
												<img className="w-256" src="assets/images/profile/undraw_wallet_aym5.svg" alt="logo" />
											</Typography>
										</Grid>
										<Grid item xs={9}>
											<Typography component="div" className={clsx(classes.title, 'text-18 cursor-pointer')}>
												COSTOS
													<div style={{ float: 'right' }}>
													<Button variant="contained" size="large" color="secondary" className={clsx('pull-right')}>Ingresar</Button>
												</div>
											</Typography>
											<Typography className={clsx(classes.url)}>
												10 Registros
										   </Typography>
											<Typography className="text-15">
												Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits.
										   </Typography>
										</Grid>
									</Grid>
								</Paper>
							</Grid>
							<Grid item xs={5} sm={5}>
								<Paper className={classes.paper}>
									<Grid container spacing={0}>
										<Grid item xs={3}>
											<Typography variant="overline" className="MuiCardContent-root flex flex-col items-left">
												<img className="w-256" src="assets/images/profile/undraw_pay_online_b1hk.svg" alt="logo" />
											</Typography>
										</Grid>
										<Grid item xs={9}>
											<Typography component="div" className={clsx(classes.title, 'text-18 cursor-pointer')}>
												GASTOS
													<Typography component="div" style={{ float: 'right' }}>
													<Button variant="contained" size="large" color="secondary" className={clsx('pull-right')}>Ingresar</Button>
												</Typography>
											</Typography>
											<Typography className={clsx(classes.url)}>
												10 Registros
										   </Typography>
											<Typography className="text-15">
												Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits.
										   </Typography>
										</Grid>
									</Grid>
								</Paper>
							</Grid>
						</Grid>
						
					</FuseAnimateGroup>
					{/* <div className="flex justify-center mt-48">
						<Paper elevation={1} className="rounded-8">
							<IconButton>
								<Icon className="text-20">
									{theme.direction === 'ltr' ? 'chevron_left' : 'chevron_right'}
								</Icon>
							</IconButton>
							<Button className="min-w-48 h-48 p-0 px-16">1</Button>
							<Button className="min-w-48 h-48 p-0 px-16">2</Button>
							<Button className="min-w-48 h-48 p-0 px-16">3</Button>
							<Button className="min-w-48 h-48 p-0 px-16">4</Button>
							<Button className="min-w-48 h-48 p-0 px-16">5</Button>
							<IconButton>
								<Icon className="text-20">
									{theme.direction === 'ltr' ? 'chevron_right' : 'chevron_left'}
								</Icon>
							</IconButton>
						</Paper>
					</div> */}
				</div>
			}
		/>
	);
}

export default ModernSearchPage;