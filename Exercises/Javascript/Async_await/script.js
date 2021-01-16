const pickGetData = async () => {
  const data = await getData ();
  console.log ("De data:", data);
}

pickGetData()