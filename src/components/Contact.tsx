import { SectionLayout } from "../layouts/SectionLayout";
import { Link } from "./Link";

const PGP_FINGERPRINT = "7A04 6632 CB21 38DB B3AC A6BE 5558 99D3 245B 13E5";

export const Contact = () => {
  return (
    <SectionLayout id="contact" title="Other/Contact">
      <ul className="list-disc pl-6 font-semibold">
        <li>
          Twitter: <Link to="https://twitter.com/FelipeSazz">@FelipeSazz</Link>
        </li>
        <li>
          Github: <Link to="https://github.com/Sazzo">@Sazzo</Link>
        </li>
        <li>
          Discord:{" "}
          <Link to="https://discord.com/users/326123612153053184">
            sazz#1000
          </Link>
        </li>
        <li>
          Keybase: <Link to="https://keybase.io/sazz">keybase.io/sazz</Link>
        </li>
        <li>
          Email: <Link to="mailto:hello@sazz.space">hello@sazz.space</Link>
        </li>
        <li>
          PGP Fingerprint:{" "}
          <span className="font-mono font-medium">{PGP_FINGERPRINT}</span>
        </li>
      </ul>
    </SectionLayout>
  );
};
