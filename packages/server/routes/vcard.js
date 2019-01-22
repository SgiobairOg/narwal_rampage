const vCardsJS = require('vcards-js');
const path = require('path');

module.exports = {
    render: function(req, res) {
        vCard = vCardsJS();

        vCard.firstName = 'Jason';
        vCard.middleName = 'P';
        vCard.lastName = 'Wilson';
        vCard.namePrefix = 'LTJG/NOAA (Sep)';
        vCard.uid = '82ffe22f-6649-4b2f-bc27-8ea8858063d5';
        vCard.email = 'jason@wilsons.io';
        vCard.cellPhone = '+41 079-838-9637';

        vCard.photo.embedFromFile(path.resolve(__dirname, '../assets/profile.jpg'));
        vCard.logo.embedFromFile(path.resolve(__dirname, '../assets/profile.jpg'));

        vCard.birthday = new Date(1983, 12, 29);
        vCard.title = 'Frontend Developer';
        vCard.url = 'https://github.com/sgiobairog';
        vCard.workUrl = 'https://www.wilsons.io';
        vCard.note = 'Likely wearing short sleeves if the temperature is above -4˚C';

        vCard.role = 'Frontend Development';

        vCard.source = 'https://www.wilsons.io/card';

        vCard.homeAddress.label = 'Home Address';
        vCard.homeAddress.street = 'Neuhofstrasse 9';
        vCard.homeAddress.city = 'Emmenbrücke';
        vCard.homeAddress.stateProvince = 'LU';
        vCard.homeAddress.postalCode = '6020';
        vCard.homeAddress.countryRegion = 'Switzerland';

        vCard.version = '3.0';
        
        res.set('Content-Type', 'text/vcard; name="jprwilson.vcf"');
        res.set('Content-Disposition', 'inline; filename="jprwilson.vcf"');

        return res.send(202, vCard.getFormattedString());
    }
};