function DetailInfo({ label, data }) {
  return (
    <p>
      <strong>{`${label}:`}</strong> {data ?? `${label} Not Specified`}
    </p>
  );
}

export default DetailInfo;
