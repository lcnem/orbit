export interface Key {
  id: string;
  name: string;
  public_key: string;
  hash_type: HashTypes;
  signature_type: SignatureTypes;
  mnemonic: string;
  coin_type: number;
  account: number;
  change: number;
  address_index: number;
  hashed_password?: string;
}

export enum HashTypes {
  SHA256 = "sha256"
}

export enum SignatureTypes {
  SECP256K1 = "secp256k1"
}
