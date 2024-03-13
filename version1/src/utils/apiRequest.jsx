const apiRequest = async (url='', optionsObj=null, errMesg=null) => {
    try {
        const response = await fetch(url, optionsObj);
        if (!response.ok) throw Error('Please reload the app');
    } catch (err) {
        errMesg = err.message;
    } finally {
        return errMesg;
    }

}

export default apiRequest;