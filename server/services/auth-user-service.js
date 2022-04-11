import Member from '../models/member.js';

export const createMember = async (userDetails) => {
    const { email, name, mobileNum, typeId  } = userDetails;


    const { _doc: member } = await Member.create({
      name,
      email,
      mobileNum,
      typeId
    });
  
    return member;
  };