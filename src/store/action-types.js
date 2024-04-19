/*
 为了保证行为标识的唯一
 统一管理需要派发的行为标识
 多人开发下,可能会存在行为标识的冲突,所以虽然分模块,但不论那个模块下,我们派发的行为标识,必须是唯一的
*/
//基于宏管理(统一管理),让所有标识,唯一,都在这里定义//这样的特点,有提示,并且冲突会报错,便于开发

export const VOTE_SUP ="VOTE_SUP" 
export const VOTE_OPP ="VOTE_OPP"
// export const VOTE_SUP ="VOTE_SUP"

