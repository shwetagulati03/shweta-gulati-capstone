exports.seed = async function(knex) {
    // Deletes ALL existing entries
    await knex('users').del()
    await knex('users').insert([
      {id: 1, user_name: 'shweta_g',user_email: 's@yahoo.in',user_password:'123456',user_mobile:'1234567890',
        user_address:'1370',user_city:'Vancouver',user_state:'BC',user_country:'Canada',user_zipcode:'V7T1H6',
        
      },
     
    ]);
  };