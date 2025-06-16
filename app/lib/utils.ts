'use server';

import fetch from 'node-fetch';

export async function isServerUp(host: string): Promise<boolean> {
  try {
    console.log(host)
    const response = await fetch(host);
    console.log(response);
    if (response.ok) {
      return true;
    }
    return false;
  } catch (error) {
    console.log(error);
    return false;
  }
}