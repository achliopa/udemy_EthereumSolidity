import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
	JSON.parse(CampaignFactory.interface),
	'0x131D0d48D54FaEbfe8bbab586B2dd63c3245E0Db'
);
export default instance;