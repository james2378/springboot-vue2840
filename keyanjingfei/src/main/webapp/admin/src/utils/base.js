const base = {
    get() {
        return {
            url : "http://localhost:8080/keyanjingfei/",
            name: "keyanjingfei",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/keyanjingfei/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "科研经费管理系统"
        } 
    }
}
export default base
