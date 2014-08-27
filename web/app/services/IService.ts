interface IService<T> {
	doCallback(callback: Function, data: T);
    getById(id: string, successCallback: Function, errorCallback: Function);
    getAll(successCallback: Function, errorCallback: Function);
    create(data: T, successCallback: Function, errorCallback: Function);
    update(data: T, successCallback: Function, errorCallback: Function);
    delete(data: T, successCallback: Function, errorCallback: Function);
    createOrUpdate(data: T, successCallback: Function, errorCallback: Function);
}

export = IService;