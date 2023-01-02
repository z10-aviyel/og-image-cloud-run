interface IJobData {
  name: string;
  location: string;
  jobType: string;
  icon: string;
  tags: string[];
}

function OgImage({ data }: { data: IJobData }) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: '#FFF7EE',
        position: 'relative',
        padding: '56px',
        width: '100%',
        height: '100%',
      }}
    >
      <div
        style={{
          position: 'relative',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          padding: 20,
          // gap is not supported
          // gap: 16,
        }}
      >
        {data.tags.map((tag) => (
          <div
            key={tag}
            style={{
              padding: '16px 40px',
              border: '1px solid #464554',
              borderRadius: 48,
              color: '#464554',
              fontWeight: 500,
              fontSize: 40,
              // gap is not supported
              margin: '0 16px 16px 0',
              backgroundColor: 'white',
            }}
          >
            {tag}
          </div>
        ))}
      </div>
      <div
        style={{
          position: 'relative',
          width: '100%',
          display: 'flex',
          alignItems: 'flex-end',
        }}
      >
        <img src={data.icon} style={{ height: 154, marginRight: 48 }} />
        <div
          style={{
            flexGrow: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              display: 'flex',
              color: 'black',
              fontSize: '56px',
              fontWeight: '700',
              marginBottom: 8,
            }}
          >
            {data.name}
          </div>
          <div
            style={{
              display: 'flex',
              color: 'black',
              fontSize: '40px',
              fontWeight: '600',
            }}
          >
            {data.location}
          </div>
        </div>
        <div
          style={{
            color: 'white',
            backgroundColor: '#21202D',
            borderRadius: 48,
            padding: '12px 24px',
            fontSize: '32px',
            fontWeight: '600',
          }}
        >
          {data.jobType}
        </div>
      </div>
    </div>
  );
}

export { OgImage };
