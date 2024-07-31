const config={
    user: 'sa',
    password: '84+-blaster32',
    server: '10.100.120.7',
    database: 'SipeDes',
    driver: 'msnodesqlv8',
    
    options: {
        enableArithAbort: true,
        trustedConnection: true
    }
    
}
const configPrueba={
    user: 'sa',
    password: '84+-blaster32',
    server: '10.100.120.8',
    database: 'pSipe4',
    driver: 'msnodesqlv8',
    
    options: {
        enableArithAbort: true,
        trustedConnection: true
    }
    
}

module.exports = {
    config,
    configPrueba
};
