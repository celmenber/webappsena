//import DemoContent from '@fuse/core/DemoContent';
import FusePageCarded from '@fuse/core/FusePageCarded';
import { makeStyles } from '@material-ui/core/styles';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import FuseAnimate from '@fuse/core/FuseAnimate';
import ActivosEmpresa from './ActivosEmpresa';
import ListaActivosEmpresa from './ListaActivosEmpresa';
import ProductoEmpresa from './ProductoEmpresa';
import ListaProductoEmpresa from './ListaProductoEmpresa';
import ProveedorEmpresa from './ProveedorEmpresa';
import ListaProveedorEmpresa from './ListaProveedorEmpresa';

const useStyles = makeStyles({
    layoutRoot: {}
});

function CardedFullWidthTabbedSample() {
    const classes = useStyles();
    const [selectedTab, setSelectedTab] = useState(0);

    const handleTabChange = (event, value) => {
        setSelectedTab(value);
    };

    return (
        <FusePageCarded
            classes={{
                root: classes.layoutRoot,
                toolbar: 'p-1'
            }}
            header={
                <div className="py-24" style={{maxHeight:"16px"}}>
                    <h4>GESTION DE ACTIVOS, PRODUCTOS/SERVICIOS Y PROVEEDORES</h4>
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
                    className="w-full h-64"
                >
                    <Tab className="h-64" label="Activos de la Empresa" />
                    <Tab className="h-64" label="Productos de la Empresa" />
                    <Tab className="h-64" label="Proveedores de la Empresa" />
                </Tabs>
            }
            content={
                <div className="p-24">
                    {selectedTab === 0 && (
                        <div>
                            <h3 className="mb-16">Vamos a crear los Activos de la Empresa</h3>
                            <ActivosEmpresa />
                            <FuseAnimate animation="transition.slideUpIn" duration={400} delay={100}>
                                <Typography color="inherit" className="text-24 sm:text-40 font-light">
                                    LISTA DE ACTIVOS
				                	</Typography>
                            </FuseAnimate>
                            <ListaActivosEmpresa />
                        </div>
                    )}
                    {selectedTab === 1 && (
                        <div>
                            <h3 className="mb-16">Vamos a crear los Productos o servicios de la Empresa</h3>
                            <ProductoEmpresa />
                            <FuseAnimate animation="transition.slideUpIn" duration={400} delay={100}>
                                <Typography color="inherit" className="text-24 sm:text-40 font-light">
                                    PRODUCTOS Y SERVICIOS
				                	</Typography>
                            </FuseAnimate>
                            <ListaProductoEmpresa/>
                        </div>
                    )}
                    {selectedTab === 2 && (
                        <div>
                            <h3 className="mb-16">Vamos a crear Proveedores de la Empresa</h3>
                            <ProveedorEmpresa />
                            <FuseAnimate animation="transition.slideUpIn" duration={400} delay={100}>
                                <Typography color="inherit" className="text-24 sm:text-40 font-light">
                                    LISTA PROVEEDORES
				                	</Typography>
                            </FuseAnimate>
                            <ListaProveedorEmpresa />
                        </div>
                    )}
                </div>
            }
        />
    );
}

export default CardedFullWidthTabbedSample;

