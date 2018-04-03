import axios from "axios";
import { MetricsPayload } from "../model/MetricsPayload";
import { MetricsPublisher } from "./MetricsPublisher";

/**
 * Metrics publisher that sends payload to remote server
 * Publisher requires remote server URL
 */
export class MetricsNetworkPublisher implements MetricsPublisher {

  constructor(private url: string) {
  }

  /**
   * Allows to publish metrics to external source
   */
  public publish(payload: MetricsPayload): Promise<any> {
    return axios.post(this.url, payload);
  }

}