import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
	JSON.parse(CampaignFactory.interface),
	'0x45533D75EEd35AC9d710191D473E8E5Ab4EE7b90'
);
export default instance;