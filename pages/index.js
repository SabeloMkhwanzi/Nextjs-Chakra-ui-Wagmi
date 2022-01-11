import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Box, Button, useColorMode } from "@chakra-ui/react";
import {
  useAccount,
  useConnect,
  useBalance,
  useEnsAvatar,
  useNetwork,
  useToken,
} from "wagmi";

export default function Home() {
  // Wallet connect function
  const [{ data: connectData, error }, connect] = useConnect();

  // Connected account details
  const [{ data: accountData }, disconnect] = useAccount({
    fetchEns: true,
  });

  // Fetching balance information
  const [{ data: getBalance }] = useBalance({
    addressOrName: accountData?.address,
  });

  // useNetwork accessing information about connected network.
  const [{ data: getSwitchNetwork }] = useNetwork();

  //  useToken fetching ERC-20 token information
  const [{ data: getToken }] = useToken({
    address: accountData?.address,
  });

  // Fetching ENS avatar for address or ENS name.

  // const [{ data: getEnsAvatar, loading, errorEns }] = useEnsAvatar({
  //   addressOrName: accountData?.address,
  // });

  // Chakra color mode function
  const { toggleColorMode } = useColorMode();

  // if (loading) return <div>Fetching avatar…</div>;
  // if (errorEns || !getEnsAvatar) return <div>Error fetching avatar</div>;

  if (accountData) {
    return (
      <div>
        {/* <Avatar src={accountData.ens?.avatar} alt="ENS Avatar" /> */}
        <div>
          {accountData.ens?.name
            ? `${accountData.ens?.name} (${accountData.address})`
            : accountData.address}
        </div>
        <div>
          <h6>
            ERC-20 token: {getToken?.totalSupply?.formatted} {getToken?.symbol}
          </h6>
        </div>
        <div>
          {/* <image src={getEnsAvatar} /> */}
          <h6>
            Acc Balance:{`${Number(getBalance?.formatted).toFixed(3)} Ether`}
          </h6>
        </div>
        <div>
          {getSwitchNetwork.chain?.name ?? networkData.chain?.id}{" "}
          {getSwitchNetwork.chain?.unsupported && "(unsupported)"}
          {getSwitchNetwork &&
            getSwitchNetwork.chains.map((x) =>
              x.id === getSwitchNetwork.chain?.id ? null : (
                <Button key={x.id} onClick={() => getSwitchNetwork(x.id)}>
                  Switch to {x.name}
                </Button>
              )
            )}
          {error && <div>{error?.message}</div>}
        </div>
        <Button onClick={disconnect}>Disconnect</Button>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Next.js & Chakra-Ui Template</title>
        <meta name="description" content="Web3.0 Template" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to{" "}
          <a href="https://nextjs.org">Next.js, TypeScript & Chakra-Ui!</a>
        </h1>
        <p className={styles.description}>
          Get started by editing the Template
        </p>

        <Box my={5}>
          <Button bg="blue.300" onClick={toggleColorMode}>
            Color Mode
          </Button>
        </Box>

        {/* <Box>
          <Button
            borderRadius="full"
            bgColor="blue.900"
            onClick={connectWallet}
          >
            <p className="text-white text-base font-semibold">Connect Wallet</p>
          </Button>
        </Box> */}

        <div>
          {connectData.connectors.map((x) => (
            <Button
              borderRadius="full"
              bgColor="blue.900"
              disabled={!x.ready}
              key={x.id}
              onClick={() => connect(x)}
            >
              {`${x.name}${!x.ready ? " (unsupported)" : ""}`}
            </Button>
          ))}

          {error && <div>{error?.message ?? "Failed to connect"}</div>}
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
