import connection from '@/config/db';
import fs from 'fs';
import formidable from 'formidable-serverless';
import path from 'path';
import slugify from 'slugify';
import moment from 'moment';

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  switch (req.method) {
    case 'GET':
      return await getAdmissions(req, res);
    case 'POST':
      return await addAdmission(req, res);
    default:
      return res.status(400).send('Method not allowed');
  }
}

const addAdmission = async (req, res) => {
  // try {
  //   const query = 'SELECT * FROM courses';
  //   connection.query(query, (error, results) => {
  //     if (error) {
  //       console.error('Error querying the db: ', error);
  //       res.status(500).json({ message: 'Server Error' });
  //       return;
  //     }
  //     // Process the DB Result
  //     res.status(200).json(results);
  //   });
  // } catch (error) {
  //   console.error('Error: ', error);
  //   res.status(500).json({ message: 'Server Error' });
  // }

  const timeStamp = moment().format('DD-MM-YYYY');

  const data = await new Promise((resolve, reject) => {
    let form = formidable({
      multiple: true,
      uploadDir: `./public`,
    });

    form.keepExtensions = true;

    form.parse(req, (err, fields, files) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: 'Server error' });
        reject(err);
      } else {
        const formData = {
          fields: fields,
          files: files,
        };

        try {
          const query =
            'INSERT INTO admissions (firstName,middleName,lastName,dob,gender,idno,phone,email,address,village,gname,occupation,gid,gphone,school,yoc,grade,course,coc,eoc,passport,idCard,gIdCard,kcpeCert,kcseCert,leavingCert,medCert) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)';

          const passport = path.basename(formData.files.passport.path);
          const idCard = path.basename(formData.files.idCard.path);
          const gIdCard = path.basename(formData.files.gIdCard.path);
          const kcpeCert = path.basename(formData.files.kcpeCert.path);
          const kcseCert = path.basename(formData.files.kcseCert.path);
          const leavingCert = path.basename(formData.files.leavingCert.path);
          const medCert = path.basename(formData.files.medCert.path);

          connection.query(
            query,
            [
              formData.fields.firstName,
              formData.fields.middleName,
              formData.fields.lastName,
              formData.fields.dob,
              formData.fields.gender,
              formData.fields.idno,
              formData.fields.phone,
              formData.fields.email,
              formData.fields.address,
              formData.fields.village,
              formData.fields.gname,
              formData.fields.occupation,
              formData.fields.gid,
              formData.fields.gphone,
              formData.fields.school,
              formData.fields.yoc,
              formData.fields.grade,
              formData.fields.course,
              formData.fields.coc,
              formData.fields.eoc,
              passport,
              idCard,
              gIdCard,
              kcpeCert,
              kcseCert,
              leavingCert,
              medCert,
            ],
            (error, results) => {
              if (error) {
                console.error('Error querying the db: ', error);
                res.status(500).json({ message: 'Server Error' });
                return;
              }

              // Process the DB Result
              res.status(200).json(results);
            }
          );
        } catch (error) {
          console.error('Error: ', error);
          res.status(500).json({ message: 'Server Error' });
        }

        resolve(formData.fields);
        // return res.status(200).json({ message: 'File uploaded successfully' });
      }
    });
  });

  res.json(data);
};
