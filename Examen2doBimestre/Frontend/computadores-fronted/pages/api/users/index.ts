import { NextApiRequest, NextApiResponse } from 'next'
import { sampleUserData } from '../../../utils/sample-data'
import {ComputerService} from "../../../computadora/computadora.service";

const handler = async (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (!Array.isArray(sampleUserData)) {
      throw new Error('Cannot find user data')
    }
    const computerService = new ComputerService();
    const computers = await computerService.getComputadoras();

    res.status(200).json(computers)
  } catch (err: any) {
    res.status(500).json({statusCode: 500, message: err.message})
  }
}

export default handler
