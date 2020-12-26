import FuseAnimate from '@fuse/core/FuseAnimate';
import FuseAnimateGroup from '@fuse/core/FuseAnimateGroup';
import Icon from '@material-ui/core/Icon';
import { makeStyles } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';
import Typography from '@material-ui/core/Typography';
import withReducer from 'app/store/withReducer';
import clsx from 'clsx';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import reducer from '../store';
import { getBoards, resetBoards } from '../store/boardsSlice';

const useStyles = makeStyles(theme => ({
	header: {
		background: `linear-gradient(to left, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 100%)`,
		color: theme.palette.getContrastText(theme.palette.primary.main)
	},
	headerIcon: {
		position: 'absolute',
		top: -64,
		left: 0,
		opacity: 0.04,
		fontSize: 512,
		width: 512,
		height: 512,
		pointerEvents: 'none'
	},
	root: {
		background: theme.palette.secondary,
		color: theme.palette.getContrastText(theme.palette.secondary.main)
	},
	board: {
		cursor: 'pointer',
		boxShadow: theme.shadows[0],
		transitionProperty: 'box-shadow border-color',
		transitionDuration: theme.transitions.duration.short,
		transitionTimingFunction: theme.transitions.easing.easeInOut,
		background: "#FFFFFF",
		color: theme.palette.primary.main,
		'&:hover': {
			boxShadow: theme.shadows[6]
		}
	},
	newBoard: {
		borderWidth: 2,
		borderStyle: 'dashed',
		borderColor: fade(theme.palette.primary.main, 0.6),
		'&:hover': {
			borderColor: fade(theme.palette.getContrastText(theme.palette.primary.main), 0.8)
		}
	}
}));

function Boards(props) {
	const dispatch = useDispatch();
	//const boards = useSelector(selectBoards);

	const classes = useStyles(props);

	useEffect(() => {
		dispatch(getBoards());
		return () => {
			dispatch(resetBoards());
		};
	}, [dispatch]);

	return (
		<div className="flex flex-col flex-auto flex-shrink-0 w-full">
		{/* <div className={clsx(classes.root, 'flex flex-grow flex-shrink-0 flex-col items-center')}> */}
			<div
				className={clsx(
					classes.header,
					'relative overflow-hidden flex flex-col flex-shrink-0 items-center justify-center text-center p-16 sm:p-24 h-200 sm:h-288'
				)}
			>
				<FuseAnimate animation="transition.slideUpIn" duration={400} delay={100}>
					<Typography color="inherit" className="text-24 sm:text-40 font-light">
						Gestion de los procesos Empresariales
					</Typography>
				</FuseAnimate>
				<FuseAnimate duration={400} delay={600}>
					<Typography variant="subtitle1" color="inherit" className="mt-8 sm:mt-16 mx-auto max-w-512">
						<span className="opacity-75">
							perspectiva global
							del funcionamiento de una empresa o de una situación
							propia del negocio,
						</span>
					</Typography>
				</FuseAnimate>
				<Icon className={classes.headerIcon}>school</Icon>
			</div>
			<div className="flex flex-grow flex-shrink-0 flex-col items-center container px-16 md:px-24">
			
				{/* <FuseAnimate>
					<Typography className="mt-44 sm:mt-88 sm:py-24 text-32 sm:text-40 font-300" color="inherit">
						Gestion de los procesos Empresariales
					</Typography>
				</FuseAnimate> */}

				<div>
					<FuseAnimateGroup
						className="flex flex-wrap w-full justify-center py-32 px-16"
						enter={{
							animation: 'transition.slideUpBigIn',
							duration: 300
						}}
					>
					{/* 	{boards.map(board => (
							<div className="w-224 h-224 p-16" key={board.id}>
								<Link
									to={`/apps/scrumboard/boards/${board.id}/${board.uri}`}
									className={clsx(
										classes.board,
										'flex flex-col items-center justify-center w-full h-full rounded py-24'
									)}
									role="button"
								>
									<Icon className="text-56">assessment</Icon>
									<Typography className="text-16 font-300 text-center pt-16 px-32" color="inherit">
										{board.name}
									</Typography>
								</Link>
							</div>
						))} */}
						<div className="w-224 h-224 p-16">
							<Link
								to={`/apps/gestionempresa`}
								className={clsx(
									classes.board,
									classes.newBoard,
									'flex flex-col items-center justify-center w-full h-full rounded py-24'
								)}
								role="button"
							>
								<Icon className="text-56">contact_mail</Icon>
								<Typography className="text-16 font-300 text-center pt-16 px-32" color="inherit">
									Información Basica
								</Typography>
							</Link>
						</div>
						<div className="w-224 h-224 p-16">
							<Link
								to={`/apps/gestionempresa`}
								className={clsx(
									classes.board,
									classes.newBoard,
									'flex flex-col items-center justify-center w-full h-full rounded py-24'
								)}
								role="button"
							>
								<Icon className="text-56">remove_shopping_cart</Icon>
								<Typography className="text-16 font-300 text-center pt-16 px-32" color="inherit">
									Modelo de Negocio
								</Typography>
							</Link>
						</div>
						
						<div className="w-224 h-224 p-16">
							<Link
								to={`/apps/gestionempresa`}
								className={clsx(
									classes.board,
									classes.newBoard,
									'flex flex-col items-center justify-center w-full h-full rounded py-24'
								)}
								role="button"
							>
								<Icon className="text-56">settings_applications</Icon>
								<Typography className="text-16 font-300 text-center pt-16 px-32" color="inherit">
									Planeación Estratégica
								</Typography>
							</Link>
						</div>
						<div className="w-224 h-224 p-16">
							<Link
								to={`/apps/gestionempresa`}
								className={clsx(
									classes.board,
									classes.newBoard,
									'flex flex-col items-center justify-center w-full h-full rounded py-24'
								)}
								role="button"
							>
								<Icon className="text-56">assessment</Icon>
								<Typography className="text-16 font-300 text-center pt-16 px-32" color="inherit">
									Administración Empresarial
								</Typography>
							</Link>
						</div>

					{/* 	<div className="w-224 h-224 p-16">
							<div
								className={clsx(
									classes.board,
									classes.newBoard,
									'flex flex-col items-center justify-center w-full h-full rounded py-24'
								)}
								to={`/apps/gestionempresa`}
								role="button"
								tabIndex={0}
							>
								<Icon className="text-56">add_circle</Icon>
								<Typography className="text-16 font-300 text-center pt-16 px-32" color="inherit">
									Add new board
								</Typography>
							</div>
						</div> */}
					</FuseAnimateGroup>
				</div>
			</div>
		</div>
	);
}

export default withReducer('scrumboardApp', reducer)(Boards);
