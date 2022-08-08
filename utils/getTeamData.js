import fs from 'fs';
import path from 'path';

const teamDetailsPath = path.join(process.cwd(), 'teamInfo/team.json');

export default function getTeamData() {
  let jsonData;
  fs.readFile(teamDetailsPath, function (err, data) {
    if (err) throw err;
    // console.log(data.toJSON());
    jsonData = data.toJSON();
  });
  return jsonData;
}
