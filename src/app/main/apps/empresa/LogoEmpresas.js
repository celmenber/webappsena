//import _ from '@lodash';
//import FuseUtils from '@fuse/utils';
//import { useForm } from '@fuse/hooks';
import { makeStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import clsx from 'clsx';
import React from 'react';

const useStyles = makeStyles(theme => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '100ch',
        },
    },
	productImageFeaturedStar: {
		position: 'absolute',
		top: 0,
		right: 0,
		opacity: 0
	},
	productImageUpload: {
		transitionProperty: 'box-shadow',
		transitionDuration: theme.transitions.duration.short,
		transitionTimingFunction: theme.transitions.easing.easeInOut
	},
	productImageItem: {
		transitionProperty: 'box-shadow',
		transitionDuration: theme.transitions.duration.short,
		transitionTimingFunction: theme.transitions.easing.easeInOut,
		'&:hover': {
			'& $productImageFeaturedStar': {
				opacity: 0.8
			}
		},
		'&.featured': {
			pointerEvents: 'none',
			boxShadow: theme.shadows[3],
			'& $productImageFeaturedStar': {
				opacity: 1
			},
			'&:hover $productImageFeaturedStar': {
				opacity: 1
			}
		}
	}
}));

export default function LogoEmpresas() {
    const classes = useStyles();
  //  const { form, setForm } = useForm(null);

    function handleUploadChange(e) {
        const file = e.target.files[0];
        if (!file) {
            return;
        }
        console.log(file)
        const reader = new FileReader();
        reader.readAsBinaryString(file);

      /*   reader.onload = () => {
            setForm(
                _.set({ ...form }, `images`, [
                    {
                        id: FuseUtils.generateGUID(),
                        url: `data:${file.type};base64,${btoa(reader.result)}`,
                        type: 'image'
                    },
                    ...form.images
                ])
            );
        }; */

        reader.onerror = () => {
            console.log('error on load image');
        };
    }
    return (
        <form className={classes.root} noValidate autoComplete="off">
        <div className="MuiCardContent-root flex flex-col items-center justify-center p-32 text-center">
            <div className="flex justify-center sm:justify-start flex-wrap -mx-8">
                <label
                    htmlFor="button-file"
                    className={clsx(classes.productImageUpload,
                        'flex items-center justify-center relative w-128 h-128 rounded-8 mx-8 mb-16 overflow-hidden cursor-pointer shadow-1 hover:shadow-5'
                    )}
                 >
                 <input
                        accept="image/*"
                        className="hidden"
                        id="button-file"
                        type="file"
                        onChange={handleUploadChange}
                    />
                    <Icon fontSize="large" color="action">
                        cloud_upload
					</Icon>
                </label>
                 <div
                        role="button"
                        tabIndex={0}
                        className={clsx(
                            classes.productImageItem,
                            'flex items-center justify-center relative w-128 h-128 rounded-8 mx-8 mb-16 overflow-hidden cursor-pointer shadow-1 hover:shadow-5'
                        )}
                    >
                        {/* <img className="max-w-none w-auto h-full" src="images/logo/" alt="product" /> */}
                        <img className="max-w-none w-auto h-full" src="assets/images/logos/fuse.svg" alt="logo" />
                    </div>
                </div>
            </div>
        </form>
      );
}