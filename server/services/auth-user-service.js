import Member from '../models/member.js';

export const createMember = async (userDetails) => {
    const { email, name, mobileNum,  } = userDetails;


    const { _doc: member } = await Member.create({
      name,
      email,
      mobileNum
    });
  
    return member;
  };