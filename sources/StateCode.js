/**
 * Created by Administrator on 2017/1/30.
 */
const StateCode = {
    OK : 1000,                   //成功
    ALLOW_LOGIN_OR_REGISTER: 1,//允许登录
    NO_USER_NAME: 2,            //没有用户名
    NO_PASSWORD: 3,             //没有密码
    PASSWORD_WRONG: 4,          //密码错误
    NO_SUCH_USER: 5,            //没有此用户
    FAIL_TO_SAVE_USER_INFO: 6, //保存用户信息失败
    FAIL_TO_CONNECT_DB: 7,     //连接数据库失败
    LENGTH_IS_ZERO: 8,          //长度为0
    USER_IS_EXISTED : 9,        //用户已存在
    ALEADY_LOGIN:10,            //已经登录过
    EXIT_LOGIN_SUCCESS:11,      //退出成功
    NO_LOGIN:12                  //用户未登录
};
module.exports = StateCode;